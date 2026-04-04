import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Watch3({
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
          d="M11.25,11.25c-.143,0-.288-.041-.416-.126l-2.25-1.5c-.208-.139-.334-.373-.334-.624v-2.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.849l1.916,1.277c.345,.23,.438,.695,.208,1.04-.145,.217-.382,.334-.625,.334Z"
          fill={secondaryfill}
        />
        <path
          d="M9,15c-3.309,0-6-2.691-6-6S5.691,3,9,3s6,2.691,6,6-2.691,6-6,6Zm0-10.5c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5,4.5-2.019,4.5-4.5-2.019-4.5-4.5-4.5Z"
          fill={fill}
        />
        <path
          d="M9,3.75c1.486,0,2.821,.623,3.776,1.615,.138-.15,.211-.35,.198-.554l-.167-2.669c-.057-.92-.824-1.641-1.747-1.641H6.939c-.922,0-1.689,.721-1.747,1.641l-.167,2.67c-.013,.204,.06,.404,.198,.554,.955-.992,2.29-1.615,3.776-1.615Z"
          fill={fill}
        />
        <path
          d="M9,14.25c1.486,0,2.821-.623,3.776-1.615,.138,.15,.211,.35,.198,.554l-.167,2.669c-.057,.92-.824,1.641-1.747,1.641H6.939c-.922,0-1.689-.721-1.747-1.641l-.167-2.67c-.013-.204,.06-.404,.198-.554,.955,.992,2.29,1.615,3.776,1.615Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Watch3;
