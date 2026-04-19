/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
    const lines = text.split("\n");

    const result = {
        agents: {},
        Sitemap: []
    };

    let currentAgents = [];

    for (let line of lines) {
        line = line.trim();

        if (!line || line.startsWith("#")) continue;

        const [rawKey, ...rest] = line.split(":");
        if (!rawKey || rest.length === 0) continue;

        const key = rawKey.trim().toLowerCase();
        const value = rest.join(":").trim();

        if (key === "user-agent") {
            const agent = value.toLowerCase();

            currentAgents = [agent];

            if (!result.agents[agent]) {
                result.agents[agent] = {
                    Allow: [],
                    Disallow: []
                };
            }
        }

        else if (key === "allow") {
            if (!value) continue;

            for (const agent of currentAgents) {
                result.agents[agent].Allow.push(value);
            }
        }

        else if (key === "disallow") {
            if (!value) continue;

            for (const agent of currentAgents) {
                result.agents[agent].Disallow.push(value);
            }
        }

        else if (key === "sitemap") {
            if (value) result.Sitemap.push(value);
        }
    }

    return result;
}

module.exports = parseRobots;