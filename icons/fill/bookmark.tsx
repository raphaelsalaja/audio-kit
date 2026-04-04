import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bookmark({
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
          d="M12.25,1H5.75c-1.517,0-2.75,1.233-2.75,2.75v12.5c0,.276,.152,.531,.396,.661,.244,.131,.54,.117,.77-.037l4.834-3.223,4.834,3.223c.125,.083,.271,.126,.416,.126,.122,0,.243-.029,.354-.089,.244-.13,.396-.385,.396-.661V3.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bookmark;
