import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Underwear({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15.976"
          x2="2.024"
          y1="6.75"
          y2="6.75"
        />
        <path
          d="M6.688,6.75c.065,.467,.161,1.62-.438,2.875-.46,.965-1.121,1.55-1.492,1.833"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.312,6.75c-.065,.467-.161,1.62,.438,2.875,.46,.965,1.121,1.55,1.492,1.833"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.822,3.75H3.178c-.523,0-.958,.403-.997,.925l-.43,5.725c2.577,.205,4.715,1.967,5.463,4.35h3.574c.748-2.383,2.886-4.145,5.463-4.35l-.43-5.725c-.039-.522-.474-.925-.997-.925Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Underwear;
