const api = 'https://api.github.com/users/'

/**
 * GitHub Search User API
 * @param {String} user GitHub user.
 * @returns {object} data
 */
export async function getGitHubUser(user) {
    const response = await fetch(`${api}${user}`)
    const data = await response.json()
    return data
}