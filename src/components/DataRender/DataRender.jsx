

export const DataRender = ({ render }) => {
  const PHONE_FORMATED = process.env.NEXT_PUBLIC_PHONE_FORMATED;
  const PHONE = process.env.NEXT_PUBLIC_PHONE;
  const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

  return (
    <>
      {render === "phone" && <a href={`tel:${PHONE}`}>{PHONE_FORMATED}</a>}
      {render === "email" && <a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
    </>
  );
};
