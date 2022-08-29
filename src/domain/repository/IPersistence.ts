interface IPersistence {
    create(entity: any): Promise<void>
}

export { IPersistence }