import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackPerspective22({
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
          d="m5.956,11.205l-4.5-1.377c-.42-.128-.706-.514-.706-.951V3.995c0-.669.651-1.148,1.294-.951l4.5,1.377c.42.128.706.514.706.951v4.882c0,.669-.651,1.148-1.294.951Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m9.75,8.892l.206.063c.643.197,1.294-.281,1.294-.951V3.123c0-.437-.286-.822-.706-.951L6.044.795c-.484-.148-.972.087-1.184.497"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default StackPerspective22;
