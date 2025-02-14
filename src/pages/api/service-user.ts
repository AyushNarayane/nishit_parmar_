// import Service from "../../models/Service";
// import connectDB from "@/lib/mongodb";
// export default async function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any[]): void; new(): any; }; }; }) {
//     await dbConnect(); // Ensure DB connection

//     if (req.method === "GET") {
//         try {
//             const services = await Service.find({});
//             res.status(200).json(services);
//         } catch (error) {
//             res.status(500).json({ error: "Failed to fetch services" });
//         }
//     } else {
//         res.status(405).json({ message: "Method not allowed" });
//     }
// }

// function dbConnect() {
//     throw new Error("Function not implemented.");
// }


import Service from "../../models/Service";
import connectDB from "@/lib/mongodb";

export default async function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any[]): any; new(): any; }; }; }) {
    await connectDB(); // Ensure DB connection

    if (req.method === "GET") {
        try {
            const services = await Service.find({});
            return res.status(200).json(services); // Always return an array
        } catch (error) {
            console.error("Database error:", error);
            return res.status(500).json([]); // Return an empty array to avoid type mismatch
        }
    }

    return res.status(405).json([]); // Return an empty array for unsupported methods
}
