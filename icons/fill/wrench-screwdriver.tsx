import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WrenchScrewdriver({
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
          d="M16.25 9.5H11.25C10.8359 9.5 10.5 9.84 10.5 10.25C10.5 10.66 10.8359 11 11.25 11H11.5V15.25C11.5 16.21 12.2852 17 13.25 17H14.25C15.2148 17 16 16.21 16 15.25V11H16.25C16.6641 11 17 10.66 17 10.25C17 9.84 16.6641 9.5 16.25 9.5Z"
          fill={secondaryfill}
        />
        <path
          d="M8.15 1.7C7.919 1.5601 7.628 1.54011 7.387 1.68011C7.148 1.81011 6.999 2.06011 6.999 2.33001V5.25005C6.999 5.39005 6.887 5.50005 6.749 5.50005H4.749C4.611 5.50005 4.499 5.39005 4.499 5.25005V2.33001C4.499 2.06011 4.351 1.81011 4.111 1.68011C3.871 1.54011 3.58 1.5501 3.348 1.7C2.035 2.5301 1.25 3.95005 1.25 5.50005C1.25 7.12005 2.118 8.60007 3.5 9.39007V15.2501C3.5 16.2201 4.285 17.0001 5.25 17.0001H6.25C7.215 17.0001 8 16.2201 8 15.2501V9.39007C9.382 8.60007 10.25 7.12005 10.25 5.50005C10.25 3.95005 9.465 2.53 8.15 1.7Z"
          fill={fill}
        />
        <path
          d="M14.9711 1.54004L15.4711 3.29004C15.5268 3.49004 15.5014 3.6999 15.4013 3.87L14.4999 5.44995V8H12.9999V5.44995L12.0985 3.87C11.9984 3.7 11.973 3.49004 12.0287 3.29004L12.5287 1.54004C12.621 1.21994 12.9149 1 13.2499 1H14.2499C14.5849 1 14.8788 1.22004 14.9711 1.54004Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default WrenchScrewdriver;
