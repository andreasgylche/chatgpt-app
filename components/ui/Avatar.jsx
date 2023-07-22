import * as Avatar from '@radix-ui/react-avatar';

function AvatarImage({ image, name, width = 24, height = 24 }) {
  const initials = name?.substring(0, 2);

  return (
    <Avatar.Root>
      <Avatar.Image
        className="rounded-lg"
        src={image}
        width={width}
        height={height}
        alt="Avatar"
      />
      <Avatar.Fallback>{initials}</Avatar.Fallback>
    </Avatar.Root>
  );
}

export { AvatarImage };
