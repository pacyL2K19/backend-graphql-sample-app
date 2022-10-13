const recordMutation = {
  addRecord: async (parent, args, context) => {
    const record = await context.prisma.record.create({ ...args });
    return record;
  },

  updateRecord: async (parent, args, context) => {
    const record = await context.prisma.record.update({
      where: { id: args.id },
      data: { ...args.data },
    });
    return record;
  },

  deleteRecord: async (parent, args, context) => {
    const record = await context.prisma.record.delete({
      where: { id: args.id },
    });
    return !!record;
  },
};

export default recordMutation;
