
// import prisma from '../libs/prisma'

// const createProject = async (title:string, description:string) => {
//   const project = await prisma.project.create({
//       data: {
//           title,
//           description,
//       },
//   });
//   return project;
// };


// //CREATE stall
// const createStall =async () => {
//     return prisma.stall.create({
//         data:{
//             stallId : 1,
//         },
//         select:
//         {
//             id:true,
//         }
//     })
// }


// export const createTeam = async (teamName:string, faculty:string, semester:number, captainName:string,email:string, projectName:string, description:string) => {
//   try{
//     const project = await createProject(projectName, description); // Create or find the project
//     const stall = await createStall()
//     const team = await prisma.team.create({
//       data: {
//             teamName: teamName,
//             faculty,
//             semester,
//             captainName,
//             email:email,
//             projectId: project.id,
//             stallId:stall.id
//         },        
//     });
//     return team;
//   }
//   catch(err)
//   {
//     throw err
//   }
// };

// export const createMembers = async (teamId:number, members:any) => {
//     try{
//         const createdMembers = await Promise.all(
//             members.map(async (memberName: any) => {
//                 const member = await prisma.members.create({
//                     data: {
//                         name: memberName,
//                         teamId,
//                     },
//                 });
//                 return member;
//             })
//         );
//         return createdMembers;
//     }
//     catch(err)
//     {
//         throw err
//     }
// };
