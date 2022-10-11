const recordQueries = {
  getAllRecords: async (parent, args, context) => {
    return context.prisma.record.findMany();
  },
};

export default recordQueries;
