"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  vertical: z.enum(["Mutual Funds", "Real Estate", "Insurance", "Loans", "General"]),
  message: z.string().max(1000, "Please keep the message under 1000 characters").optional(),
  website: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, "Please tick the box to allow your details to be used to reply"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // Prefill from a calculator link: /contact?vertical=Loans&note=...
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const v = q.get("vertical");
    const note = q.get("note");
    if (v && ["Mutual Funds", "Real Estate", "Insurance", "Loans"].includes(v)) {
      setValue("vertical", v as FormData["vertical"]);
    }
    if (note) setValue("message", note.slice(0, 500));
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface border border-border rounded-2xl p-8 text-center">
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">Thank you</h3>
        <p className="font-body text-sm text-foreground-muted">
          Your enquiry has been received. A reply will follow shortly.
        </p>
      </div>
    );
  }

  return (
    <form id="enquiry" onSubmit={handleSubmit(onSubmit)} className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-5">
      <div>
        <label className="font-body text-sm font-semibold text-primary block mb-1.5">Full Name</label>
        <input
          {...register("name")}
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-body text-sm font-semibold text-primary block mb-1.5">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="font-body text-sm font-semibold text-primary block mb-1.5">Phone</label>
          <input
            {...register("phone")}
            placeholder="10-digit mobile number"
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label className="font-body text-sm font-semibold text-primary block mb-1.5">Vertical of Interest</label>
        <select
          {...register("vertical")}
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          defaultValue="General"
        >
          <option>General</option>
          <option>Mutual Funds</option>
          <option>Real Estate</option>
          <option>Insurance</option>
          <option>Loans</option>
        </select>
      </div>
      <div>
        <label className="font-body text-sm font-semibold text-primary block mb-1.5">Message (optional)</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>
      {/* Hidden trap field for bots; real visitors never see or fill it. */}
      <div aria-hidden="true" className="hidden">
        <label>Website<input tabIndex={-1} autoComplete="off" {...register("website")} /></label>
      </div>
      <div>
        <label className="flex items-start gap-3 font-body text-sm text-foreground leading-relaxed">
          <input type="checkbox" {...register("consent")} className="mt-1 h-4 w-4 shrink-0 accent-[#1E5FD9]" />
          <span>
            I agree that Artha Vriksha Services may use my name, phone number, email and message only to reply to this enquiry,
            as explained in the{" "}
            <Link href="/privacy-policy" target="_blank" className="text-secondary underline">Privacy Policy</Link>.
            I can withdraw this consent at any time by writing to info@arthavriksha.in.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600 mt-1">{errors.consent.message}</p>}
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again, or write to info@arthavriksha.in.</p>
      )}
      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
      </Button>
    </form>
  );
}
