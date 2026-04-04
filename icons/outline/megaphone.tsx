import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Megaphone({
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
          d="M3.75,11.457v2.704c0,.41,.25,.778,.631,.929l1.945,.773c.4,.159,.856,.044,1.134-.284l1.666-1.979"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.954,15.125L2.61,11.002c-.256-.099-.457-.296-.564-.549-.148-.35-.296-.847-.296-1.453,0-.271,.03-.817,.289-1.436,.108-.257,.313-.466,.573-.566,3.638-1.409,6.704-2.715,10.342-4.124"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5,9c0-.828-.672-1.5-1.5-1.5-.053,0-.103,.01-.155,.016-.058,.452-.095,.945-.095,1.484s.037,1.032,.095,1.484c.052,.005,.102,.016,.155,.016,.828,0,1.5-.672,1.5-1.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <ellipse
          cx="13.5"
          cy="9"
          fill="none"
          rx="2.75"
          ry="6.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Megaphone;
