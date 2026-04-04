import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveSync({
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
          d="M16 8.83047C15.2646 9.25567 14.4099 9.5 13.5 9.5C10.7382 9.5 8.5 7.26133 8.5 4.5C8.5 3.5893 8.74346 2.73544 9.16886 2H4.75C3.23054 2 2 3.23203 2 4.75V11.25C2 11.6642 2.33579 12 2.75 12H5.5V14.5H12.5V12H15.25C15.6642 12 16 11.6642 16 11.25V8.83047Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12 11H14H16V13.25C16 14.767 14.767 16 13.25 16H4.75C3.233 16 2 14.767 2 13.25V11H3.5H6C6.414 11 6.75 11.336 6.75 11.75V13.25C6.75 13.388 6.862 13.5 7 13.5H11C11.138 13.5 11.25 13.388 11.25 13.25V11.75C11.25 11.336 11.586 11 12 11Z"
          fill={fill}
        />
        <path
          d="M17 1.25C17 0.835786 16.6642 0.5 16.25 0.5C15.8358 0.5 15.5 0.835786 15.5 1.25V1.62756C14.9334 1.23213 14.2441 1 13.5 1C11.5668 1 10 2.56702 10 4.5C10 6.43298 11.5668 8 13.5 8C14.5028 8 15.4087 7.5771 16.0457 6.90164C16.3298 6.60028 16.3159 6.12561 16.0145 5.84144C15.7132 5.55727 15.2385 5.5712 14.9543 5.87256C14.5893 6.2597 14.0732 6.5 13.5 6.5C12.3952 6.5 11.5 5.60462 11.5 4.5C11.5 3.39538 12.3952 2.5 13.5 2.5C14.0068 2.5 14.47 2.68857 14.8228 3H13.75C13.3358 3 13 3.33579 13 3.75C13 4.16421 13.3358 4.5 13.75 4.5H16.25C16.6642 4.5 17 4.16421 17 3.75V1.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ArchiveSync;
