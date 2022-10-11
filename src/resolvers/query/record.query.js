const recordQueries = {
  getAllRecords: async (parent, args, context) => {
    return context.prisma.record.findMany();
  },

  getRecordById: async (parent, args, context) => {
    return context.prisma.record.findUnique({
      where: { id: args.id },
    });
  }
};

export default recordQueries;
