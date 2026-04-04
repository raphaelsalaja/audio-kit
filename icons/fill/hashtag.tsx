import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hashtag({
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
          d="M15.25,7H3.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H15.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25,12.5H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H14.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M5.29,16c-.046,0-.093-.004-.14-.013-.406-.077-.675-.468-.599-.875L6.896,2.612c.076-.407,.467-.677,.876-.599,.406,.077,.675,.468,.599,.875l-2.344,12.5c-.067,.36-.383,.612-.736,.612Z"
          fill={fill}
        />
        <path
          d="M10.368,16c-.046,0-.093-.004-.14-.013-.406-.077-.675-.468-.599-.875L11.974,2.612c.076-.407,.466-.677,.876-.599,.406,.077,.675,.468,.599,.875l-2.344,12.5c-.067,.36-.383,.612-.736,.612Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Hashtag;
