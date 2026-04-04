import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookmarkCheck({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M12.25,1H5.75c-1.517,0-2.75,1.233-2.75,2.75v12.5c0,.276,.152,.531,.396,.661,.242,.13,.54,.116,.77-.037l4.834-3.223,4.834,3.223c.126,.083,.271,.126,.416,.126,.121,0,.243-.029,.354-.089,.244-.13,.396-.385,.396-.661V3.75c0-1.517-1.233-2.75-2.75-2.75Zm-.148,4.452l-3.397,4.5c-.128,.169-.322,.277-.533,.295-.022,.002-.044,.003-.065,.003-.189,0-.372-.071-.512-.202l-1.608-1.5c-.303-.282-.319-.757-.037-1.06,.285-.303,.759-.318,1.061-.037l1,.932,2.896-3.836c.249-.33,.718-.397,1.051-.146,.33,.25,.396,.72,.146,1.051Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BookmarkCheck;
