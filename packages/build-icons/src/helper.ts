/** Convert icon name (abc-def-ghi) to pascal case (AbcDefGhi) */
export const iconNameToPascalCase = (name: string) => {
  const parts = name.split("-");
  return parts
    .map((part) => `${part[0].toUpperCase()}${part.slice(1).toLowerCase()}`)
    .join("");
};
