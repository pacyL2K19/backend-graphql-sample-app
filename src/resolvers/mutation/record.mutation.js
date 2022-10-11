const recordMutation = {
  addRecord: async (parent, args, context) => {
    const record = await context.prisma.record.create({ data: { ...args } });
    return record;
  },
};

export default recordMutation;
