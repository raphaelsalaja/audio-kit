import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ColorPalette({
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
          d="M2.87866 11.5858L9.77295 4.69149C10.4562 4.00827 11.5646 4.00827 12.2478 4.69149L13.3085 5.75215C13.9917 6.43537 13.9917 7.54381 13.3085 8.22702L6.4142 15.1213C5.43788 16.0976 3.85497 16.0976 2.87866 15.1213C1.90234 14.145 1.90235 12.5621 2.87866 11.5858Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2.00001 3.75L2 13.5L2.87867 11.5858L7.00001 7.46445V3.75C7.00001 2.78379 6.21622 2 5.25001 2H3.75001C2.78379 2 2.00001 2.78379 2.00001 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M4.50001 11L14.25 11C15.2162 11 16 11.7838 16 12.75V14.25C16 15.2162 15.2162 16 14.25 16L4.5 16C3.11929 16 2 14.8807 2 13.5C2 12.1193 3.11929 11 4.50001 11Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ColorPalette;
