import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')
  
  // Create a restaurant
  const restaurant = await prisma.restaurant.create({
    data: {
      name: 'Demo Restaurant',
      slug: 'demo-restaurant',
      email: 'demo@restaurant.com',
      subscriptionTier: 'pro',
      subscriptionStatus: 'active',
    },
  })
  
  console.log(`Created restaurant: ${restaurant.name}`)
  
  // Create owner user
  const hashedPassword = await bcrypt.hash('password123', 12)
  
  const user = await prisma.user.create({
    data: {
      email: 'owner@restaurant.com',
      passwordHash: hashedPassword,
      firstName: 'John',
      lastName: 'Doe',
      role: 'owner',
      restaurantId: restaurant.id,
    },
  })
  
  console.log(`Created user: ${user.email} (password: password123)`)
  
  // Create a menu
  const menu = await prisma.menu.create({
    data: {
      name: 'Main Menu',
      description: 'Our delicious main menu',
      isActive: true,
      restaurantId: restaurant.id,
    },
  })
  
  console.log(`Created menu: ${menu.name}`)
  
  // Create categories
  const appetizers = await prisma.category.create({
    data: {
      nameAr: 'مقبلات',
      nameEn: 'Appetizers',
      menuId: menu.id,
      sortOrder: 1,
    },
  })
  
  const mainCourse = await prisma.category.create({
    data: {
      nameAr: 'أطباق رئيسية',
      nameEn: 'Main Course',
      menuId: menu.id,
      sortOrder: 2,
    },
  })
  
  const desserts = await prisma.category.create({
    data: {
      nameAr: 'حلويات',
      nameEn: 'Desserts',
      menuId: menu.id,
      sortOrder: 3,
    },
  })
  
  console.log('Created categories')
  
  // Create dishes
  await prisma.dish.createMany({
    data: [
      {
        name: 'Hummus',
        description: 'Creamy chickpea dip with tahini and olive oil',
        price: 25.00,
        currency: 'SAR',
        categoryId: appetizers.id,
        isActive: true,
      },
      {
        name: 'Falafel',
        description: 'Crispy fried chickpea balls with herbs',
        price: 20.00,
        currency: 'SAR',
        categoryId: appetizers.id,
        isActive: true,
      },
      {
        name: 'Grilled Chicken',
        description: 'Marinated chicken breast with herbs and spices',
        price: 65.00,
        currency: 'SAR',
        categoryId: mainCourse.id,
        isActive: true,
      },
      {
        name: 'Beef Steak',
        description: 'Premium beef steak with garlic butter',
        price: 120.00,
        currency: 'SAR',
        categoryId: mainCourse.id,
        isActive: true,
      },
      {
        name: 'Baklava',
        description: 'Sweet pastry with nuts and honey',
        price: 30.00,
        currency: 'SAR',
        categoryId: desserts.id,
        isActive: true,
      },
    ],
  })
  
  console.log('Created dishes')
  console.log('Seeding finished!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
