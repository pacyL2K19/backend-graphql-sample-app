const recordQueries = {
  getAllRecords: async (parent, args, context) => {
    return context.prisma.record.findMany({
      take: args.limit,
      skip: args.skip,
    });
  },

  getRecordCount: async (parent, args, context) => {
    return context.prisma.record.count();
  },

  getRecordById: async (parent, args, context) => {
    return context.prisma.record.findUnique({
      where: { id: args.id },
    });
  },
};

export default recordQueries;
