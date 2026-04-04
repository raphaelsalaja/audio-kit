import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BellOn({
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
          d="M3.5 6.5C3.5 3.46279 5.96279 1 9 1C12.0372 1 14.5 3.46279 14.5 6.5V10.75C14.5 11.4408 15.0592 12 15.75 12C16.1642 12 16.5 12.3358 16.5 12.75C16.5 13.1642 16.1642 13.5 15.75 13.5H2.25C1.83579 13.5 1.5 13.1642 1.5 12.75C1.5 12.3358 1.83579 12 2.25 12C2.94079 12 3.5 11.4408 3.5 10.75V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.2 15H7.80099C7.64999 15 7.50799 15.068 7.41299 15.185C7.31799 15.302 7.28099 15.456 7.31199 15.603C7.48499 16.425 8.17999 17 9.00099 17C9.82199 17 10.517 16.425 10.69 15.603C10.721 15.456 10.684 15.302 10.589 15.185C10.494 15.068 10.351 15 10.2 15Z"
          fill={fill}
        />
        <path
          d="M4.07781 0.471646C4.36949 0.765744 4.36754 1.24061 4.07344 1.5323C3.31367 2.28583 2.72587 3.21083 2.37342 4.24246C2.23951 4.63443 1.8132 4.84363 1.42123 4.70971C1.02926 4.5758 0.820061 4.14949 0.953975 3.75752C1.38273 2.50255 2.09672 1.38015 3.01716 0.467275C3.31126 0.175592 3.78613 0.177549 4.07781 0.471646Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.9222 0.471646C14.2139 0.177549 14.6887 0.175592 14.9828 0.467275C15.9033 1.38015 16.6173 2.50255 17.046 3.75752C17.1799 4.14949 16.9707 4.5758 16.5788 4.70971C16.1868 4.84363 15.7605 4.63443 15.6266 4.24246C15.2741 3.21083 14.6863 2.28583 13.9266 1.5323C13.6325 1.24061 13.6305 0.765744 13.9222 0.471646Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BellOn;
