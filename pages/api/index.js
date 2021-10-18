const data = [{ id: 1, name: "adam" }];

export default (req, res) => {
  res.status(200).json(data);
};
