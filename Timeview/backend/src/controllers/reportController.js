exports.getConsultantReport = async (req, res) => {
    const reports = await Event.findAll({
      include: [{
        model: User,
        where: { isAdmin: false }, // Assuming non-admin users are consultants
        attributes: ['firstName', 'lastName']
      }],
      attributes: ['startTime', 'endTime'],
    });
    res.json(reports);
  };
  