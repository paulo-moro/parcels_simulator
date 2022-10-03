export function currencyMask(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/^([0])/, "");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e.currentTarget.value = value;
  return e;
}

export function mdrMask(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^([0])/, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");

  e.currentTarget.value = value;
  return e;
}

export function installmentsMask(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");

  e.currentTarget.value = value;
  return e;
}
