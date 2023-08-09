import { NextResponse } from 'next/server'
import { poolConnection } from '@/db/connection'

const query = 'SELECT `c`.`name` AS `title`, (SELECT JSON_ARRAYAGG(JSON_OBJECT("title", `sc`.`name`,"description", `sc`.`description`,"href", CONCAT("/", `c`.`slug`, "/", `sc`.`slug`))) FROM `subcategories` AS `sc` WHERE `sc`.`categories_id` = `c`.`id`) AS `items`FROM `categories` AS `c` WHERE `c`.`status` > 0;'

export async function GET () {
  try {
    const [rows] = await poolConnection.query(query)
    const response = await JSON.parse(JSON.stringify(rows))
    return NextResponse.json({
      results: response
    }, {
      status: 200
    })
  } catch (error) {
    throw new Error(`: ${error}`)
  }
}
