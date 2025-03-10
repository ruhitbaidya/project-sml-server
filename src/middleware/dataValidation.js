export const dataValidation = (schema) => {
    return async (req, res, next) => {
        try {
        await schema.parseAsync(req.body);
        next()
        } catch (err) {
          next(err)
        }
    }
}