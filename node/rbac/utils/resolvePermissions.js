const UserRole = require("../models/UserRole");
const RolePermission = require("../models/RolePermission");
const Permission = require("../models/Permission");

const resolvePermissions = async (userId) => {
    const userRoles = await UserRole.find({ userId }).select("roleId");

    if (!userRoles.length) return new Set();

    const roleIds = userRoles.map(r => r.roleId);

    const rolePermissions = await RolePermission.find({
        roleId: { $in: roleIds }
    }).select("permissionId");

    const permissionIds = rolePermissions.map(rp => rp.permissionId);

    const permissions = await Permission.find({
        _id: { $in: permissionIds },
        isActive: true
    }).select("key");

    return new Set(permissions.map(p => p.key));
};

module.exports = resolvePermissions;
