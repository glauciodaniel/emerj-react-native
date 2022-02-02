import {
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync,
} from "expo-local-authentication";

const biometricAuth = async () => {
  const compatible = await hasHardwareAsync();

  if (!compatible) {
    throw "Este smartphone não possui reconhecimento por biometria ou reconhecimento facial";
  }
  const enrolled = await isEnrolledAsync();
  if (!enrolled) {
    throw "A autenticação por biometria está desativada";
  }
  const result = await authenticateAsync();
  if (!result.success) {
    throw `Falha na autenticação - ${result.error}`;
  } else {
    return true;
  }
};

export default biometricAuth;
