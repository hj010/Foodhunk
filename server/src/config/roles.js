const allRoles = {
  user: ['createReviews', 'manageCart', 'checkout', 'getOrder', 'getReservation', 'createReservation'],
  admin: [
    'manageDB',
    'getUsers',
    'manageUsers',
    'manageProducts',
    'manageReviews',
    'createReviews',
    'manageCart',
    'getOrders',
    'manageOrders',
    'getReservations',
    'createReservation',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
