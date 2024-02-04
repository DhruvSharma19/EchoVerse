import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";
import { MemberRole } from "@prisma/client";

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  if (!params.inviteCode) {
    return redirect("/");
  }

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
    },
  });
  if (existingServer) {
    const member = await db.member.create({
      data: {
        role: MemberRole.GUEST,
        profileId: profile.id,
        serverId: existingServer.id,
      },
    });
  }

  if (existingServer) {
    return redirect(`/servers/${existingServer.id}`);
  }

  return null;
};

export default InviteCodePage;
