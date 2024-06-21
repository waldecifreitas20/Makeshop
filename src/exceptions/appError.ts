export interface AppError extends Error {
  readonly name: string;
  readonly message: string;
}

export class DocumentNotFoundError implements AppError {
  name = "DOCUMENT_NOT_FOUND";
  message = "Document not found in database. Create it first."
}

export class DatabaseConfigurationError implements AppError {
  name = "NO_DATABASE_CONFIG_FOUND";
  message = "Firebase configuration has not been found. Check your environment variables.";
}

export class DocumentAlreadyExistsError implements AppError {
  name = "NO_FIREBASE_CONFIG_FOUND";
  message = "The data you are trying to create has already been existing into database";

}

