import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallTennis({
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
          d="M1.027,8.507c2.002,.334,4.132-.263,5.675-1.805,1.542-1.542,2.14-3.672,1.805-5.675-1.882,.115-3.73,.881-5.165,2.316-1.434,1.434-2.201,3.283-2.316,5.164Z"
          fill={secondaryfill}
        />
        <path
          d="M16.973,9.492c-.357-.06-.718-.095-1.08-.095-1.664,0-3.328,.634-4.596,1.901-1.542,1.542-2.14,3.672-1.805,5.675,1.882-.115,3.73-.881,5.165-2.316s2.201-3.283,2.316-5.164Z"
          fill={secondaryfill}
        />
        <path
          d="M10.237,10.237c1.821-1.821,4.308-2.571,6.685-2.265-.218-1.693-.967-3.331-2.265-4.629s-2.936-2.047-4.629-2.265c.306,2.376-.444,4.863-2.265,6.685-1.56,1.56-3.608,2.339-5.656,2.339-.344,0-.687-.03-1.029-.074,.218,1.693,.967,3.331,2.265,4.629s2.936,2.047,4.629,2.265c-.305-2.376,.444-4.863,2.265-6.685Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BallTennis;
