import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveSparkle({
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
          d="M9.88411 2H4.75C3.23054 2 2 3.23203 2 4.75V11.25C2 11.6642 2.33579 12 2.75 12H5.5V14.5H12.5V12H15.25C15.6642 12 16 11.6642 16 11.25V6.70517L15.7787 6.77888L15.3846 7.96151C15.0785 8.87868 14.2192 9.5 13.2501 9.5C12.2807 9.5 11.4221 8.87899 11.116 7.96248L10.7215 6.77888L9.53676 6.38433C8.62019 6.07751 8.00018 5.21944 8.00018 4.25C8.00018 3.28056 8.62019 2.42249 9.53676 2.11568L9.53897 2.11494L9.88411 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12 11H14H16V13.25C16 14.767 14.767 16 13.25 16H4.75C3.233 16 2 14.767 2 13.25V11H3.5H6C6.414 11 6.75 11.336 6.75 11.75V13.25C6.75 13.388 6.862 13.5 7 13.5H11C11.138 13.5 11.25 13.388 11.25 13.25V11.75C11.25 11.336 11.586 11 12 11Z"
          fill={fill}
        />
        <path
          d="M16.4873 3.5381L14.5928 2.9072L13.9615 1.0127C13.8594 0.706999 13.5728 0.5 13.2501 0.5C12.9274 0.5 12.6407 0.706999 12.5387 1.0127L11.9074 2.9072L10.0129 3.5381C9.70669 3.6406 9.50018 3.9268 9.50018 4.25C9.50018 4.5732 9.70669 4.8594 10.0129 4.9619L11.9074 5.5928L12.5387 7.4873C12.6408 7.793 12.9274 8 13.2501 8C13.5728 8 13.8595 7.793 13.9615 7.4873L14.5928 5.5928L16.4873 4.9619C16.7935 4.8594 17 4.5732 17 4.25C17 3.9268 16.7935 3.6406 16.4873 3.5381Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArchiveSparkle;
