import { createHash } from "../../config/utils/hash.js";

// DTO para usuario
export class UserDTO {
  constructor({ email, password }) {
    this.email = email;
    this.password = password ? createHash(password) : undefined;
  }
}
