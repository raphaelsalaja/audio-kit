import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Blockquote({
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
          d="M2.75009 16C2.33599 16 2.00009 15.6641 2.00009 15.25V9.75C2.00009 9.3359 2.33599 9 2.75009 9C3.16419 9 3.50009 9.3359 3.50009 9.75V15.25C3.50009 15.6641 3.16419 16 2.75009 16Z"
          fill={fill}
        />
        <path
          d="M15.2501 15H5.75009C5.33599 15 5.00009 14.6641 5.00009 14.25C5.00009 13.8359 5.33599 13.5 5.75009 13.5H15.2501C15.6642 13.5 16.0001 13.8359 16.0001 14.25C16.0001 14.6641 15.6642 15 15.2501 15Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.2501 11.5H5.75009C5.33599 11.5 5.00009 11.1641 5.00009 10.75C5.00009 10.3359 5.33599 10 5.75009 10H15.2501C15.6642 10 16.0001 10.3359 16.0001 10.75C16.0001 11.1641 15.6642 11.5 15.2501 11.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.2501 7.5H2.75009C2.33599 7.5 2.00009 7.1641 2.00009 6.75C2.00009 6.3359 2.33599 6 2.75009 6H15.2501C15.6642 6 16.0001 6.3359 16.0001 6.75C16.0001 7.1641 15.6642 7.5 15.2501 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.2501 4H2.75009C2.33599 4 2.00009 3.6641 2.00009 3.25C2.00009 2.8359 2.33599 2.5 2.75009 2.5H15.2501C15.6642 2.5 16.0001 2.8359 16.0001 3.25C16.0001 3.6641 15.6642 4 15.2501 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Blockquote;
