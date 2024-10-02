const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isContactType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isContactType(type)) return type;
  //   return undefined;
  //   return 'invalid data';
};

const parsePhoneNumber = (number) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const parsedPhoneNumber = parseInt(number);
  if (Number.isNaN(parsedPhoneNumber)) {
    return;
  }

  return parsedPhoneNumber;
};

export const parseFilterParams = (query) => {
  const { type, number } = query;

  const parsedContactType = parseContactType(type);
  const parsedPhoneNumber = parsePhoneNumber(number);

  return {
    contactType: parsedContactType,
    phoneNumber: parsedPhoneNumber,
  };
};
