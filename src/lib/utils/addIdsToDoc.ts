import { DocumentReferenceType, DocumentSnaphotType } from '../types';

export async function addIdsToDoc<T>(doc: DocumentReferenceType): Promise<T> {
    const data = await doc.get();
    return { id: doc.id, ...data.data() } as any;
}

export function addIdsToSnapshot<T>(doc: DocumentSnaphotType): T {
    return { id: doc.id, ...doc.data() } as any;
}
