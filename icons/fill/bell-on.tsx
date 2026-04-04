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
          d="M15.75 12C15.061 12 14.5 11.439 14.5 10.75V6.5C14.5 3.467 12.033 1 9 1C5.967 1 3.5 3.467 3.5 6.5V10.75C3.5 11.439 2.939 12 2.25 12C1.836 12 1.5 12.336 1.5 12.75C1.5 13.164 1.836 13.5 2.25 13.5H15.75C16.164 13.5 16.5 13.164 16.5 12.75C16.5 12.336 16.164 12 15.75 12Z"
          fill={fill}
        />
        <path
          d="M7.80099 15C7.64999 15 7.50799 15.068 7.41299 15.185C7.31799 15.302 7.28099 15.456 7.31199 15.603C7.48499 16.425 8.17999 17 9.00099 17C9.82199 17 10.517 16.425 10.69 15.603C10.721 15.456 10.684 15.302 10.589 15.185C10.494 15.068 10.352 15 10.201 15H7.80099Z"
          fill={secondaryfill}
        />
        <path
          d="M4.07783 0.471646C4.36951 0.765744 4.36756 1.24061 4.07346 1.5323C3.31369 2.28583 2.72589 3.21083 2.37344 4.24246C2.23953 4.63443 1.81321 4.84363 1.42125 4.70971C1.02928 4.5758 0.82008 4.14949 0.953994 3.75752C1.38274 2.50255 2.09674 1.38015 3.01718 0.467275C3.31128 0.175592 3.78614 0.177549 4.07783 0.471646Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M13.9222 0.471646C14.2139 0.177549 14.6888 0.175592 14.9829 0.467275C15.9033 1.38015 16.6173 2.50255 17.046 3.75752C17.1799 4.14949 16.9708 4.5758 16.5788 4.70971C16.1868 4.84363 15.7605 4.63443 15.6266 4.24246C15.2741 3.21083 14.6863 2.28583 13.9266 1.5323C13.6325 1.24061 13.6305 0.765744 13.9222 0.471646Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BellOn;
