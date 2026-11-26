/** One place for the public contact details, so every page and component shows the same number. */
export const PHONE_DISPLAY = "+91 90229 58266";
export const PHONE_TEL = "+919022958266";
export const WHATSAPP_NUMBER = "919022958266";
export const PUBLIC_EMAIL = "info@assetzpro.com";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
