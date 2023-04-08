export type OmitNest<T, R> = Omit<T, keyof R> & R;
