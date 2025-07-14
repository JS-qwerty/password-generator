export const generatePassword = (
  length: number,
  options: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  }
) => {
  const chars = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
  };

  let availableChars = "";
  if (options.uppercase) availableChars += chars.uppercase;
  if (options.lowercase) availableChars += chars.lowercase;
  if (options.numbers) availableChars += chars.numbers;
  if (options.symbols) availableChars += chars.symbols;

  if (availableChars === "") {
    availableChars = chars.lowercase;
  }

  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    result += availableChars[randomIndex];
  }

  return result;
};

export const calculateStrength = (
  password: string,
  options: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  }
): number => {
  if (!password) return 0;
  
  let score = 0;
  
  score += Math.min(password.length / 20, 1) * 25;
  
  if (options.uppercase) score += 25;
  if (options.lowercase) score += 25;
  if (options.numbers) score += 25;
  if (options.symbols) score += 25;
  
  return Math.min(score, 100);
};