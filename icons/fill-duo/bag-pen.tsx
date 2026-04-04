import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagPen({
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
          d="M7.5 3C7.5 2.17121 8.17121 1.5 9 1.5C9.82879 1.5 10.5 2.17121 10.5 3V4H12V3C12 1.34279 10.6572 0 9 0C7.34279 0 6 1.34279 6 3V4H7.5V3Z"
          fill={fill}
        />
        <path
          d="M14.3006 10.8887C14.9839 10.2053 16.092 10.2053 16.7754 10.8887L16.9433 11.0566L17.1112 11.2245C17.7946 11.9079 17.7946 13.016 17.1112 13.6994L13.95 16.8606C13.8695 16.941 13.7718 17.0022 13.6642 17.0393L10.9934 17.9602C10.7222 18.0537 10.4214 17.9843 10.2186 17.7815C10.0157 17.5786 9.94634 17.2779 10.0398 17.0067L10.9606 14.3358C10.9977 14.2282 11.0589 14.1304 11.1394 14.0499L14.3006 10.8887Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.6675 4C14.1045 4 15.2815 5.08 15.4065 6.512L15.6118 8.87699C14.7556 8.85767 13.8933 9.17469 13.2399 9.82804L10.0787 12.9892C9.83721 13.2307 9.65386 13.524 9.54255 13.8469L8.62175 16.5178C8.56706 16.6764 8.53094 16.8384 8.51276 17.001H4.6815C3.9125 17.001 3.1735 16.676 2.6545 16.109C2.1355 15.542 1.8755 14.778 1.9425 14.012L2.5945 6.512C2.7185 5.08 3.8965 4 5.3335 4H12.6675Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default BagPen;
