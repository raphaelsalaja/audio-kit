import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Conversion2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m4.25,11.75c-.192,0-.384-.073-.53-.22L.47,8.28c-.214-.214-.279-.537-.163-.817s.39-.463.693-.463h10c.414,0,.75.336.75.75s-.336.75-.75.75H2.811l1.97,1.97c.293.293.293.768,0,1.061-.146.146-.338.22-.53.22Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m11,5H1c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h8.189l-1.97-1.97c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l3.25,3.25c.214.214.279.537.163.817s-.39.463-.693.463Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Conversion2;
