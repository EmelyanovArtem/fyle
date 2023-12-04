
export function validation(responce: any) {
  if (!responce.success) {
    return responce.message;
  }
}