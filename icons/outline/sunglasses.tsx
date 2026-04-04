import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sunglasses({
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
          d="M1.5,9.723l1.614-4.647c.446-1.243,1.953-1.721,3.034-.961"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5,9.723l-1.614-4.647c-.446-1.243-1.953-1.721-3.034-.961"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5,9.723c-.769-.202-1.706-.381-2.781-.446-1.45-.089-2.485,.056-3.412,.252-.285,.06-.575,.095-.867,.095h-.88c-.292,0-.582-.035-.867-.095-.927-.196-1.962-.34-3.412-.252-1.074,.066-2.012,.244-2.781,.446"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25,9.723l-.205,1.857c-.168,1.52-.826,2.671-2.982,2.671h-.966c-1.452,0-2.181-.875-2.249-2.174l-.099-2.353"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75,9.723l.205,1.857c.168,1.52,.826,2.671,2.982,2.671h.966c1.452,0,2.181-.875,2.249-2.174l.099-2.353"
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

export default Sunglasses;
