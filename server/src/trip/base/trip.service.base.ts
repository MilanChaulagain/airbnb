/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Trip as PrismaTrip,
  Listing as PrismaListing,
  User as PrismaUser,
} from "@prisma/client";

export class TripServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TripCountArgs, "select">): Promise<number> {
    return this.prisma.trip.count(args);
  }

  async trips<T extends Prisma.TripFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TripFindManyArgs>
  ): Promise<PrismaTrip[]> {
    return this.prisma.trip.findMany<Prisma.TripFindManyArgs>(args);
  }
  async trip<T extends Prisma.TripFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TripFindUniqueArgs>
  ): Promise<PrismaTrip | null> {
    return this.prisma.trip.findUnique(args);
  }
  async createTrip<T extends Prisma.TripCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TripCreateArgs>
  ): Promise<PrismaTrip> {
    return this.prisma.trip.create<T>(args);
  }
  async updateTrip<T extends Prisma.TripUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TripUpdateArgs>
  ): Promise<PrismaTrip> {
    return this.prisma.trip.update<T>(args);
  }
  async deleteTrip<T extends Prisma.TripDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TripDeleteArgs>
  ): Promise<PrismaTrip> {
    return this.prisma.trip.delete(args);
  }

  async getListing(parentId: string): Promise<PrismaListing | null> {
    return this.prisma.trip
      .findUnique({
        where: { id: parentId },
      })
      .listing();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.trip
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
