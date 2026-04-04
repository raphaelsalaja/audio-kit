import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Live({
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
        <circle cx="9" cy="9" fill={fill} r="5" />
        <circle cx="9" cy="1.75" fill={secondaryfill} r=".75" />
        <circle cx="16.25" cy="9" fill={secondaryfill} r=".75" />
        <circle cx="9" cy="16.25" fill={secondaryfill} r=".75" />
        <circle cx="1.75" cy="9" fill={secondaryfill} r=".75" />
        <path
          d="M13.596,3.343c-.293,.293-.293,.768,0,1.061,.293,.293,.768,.293,1.061,0s.293-.768,0-1.061c-.293-.293-.768-.293-1.061,0Z"
          fill={secondaryfill}
        />
        <path
          d="M13.596,13.596c-.293,.293-.293,.768,0,1.061,.293,.293,.768,.293,1.061,0,.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={secondaryfill}
        />
        <path
          d="M3.343,13.596c-.293,.293-.293,.768,0,1.061,.293,.293,.768,.293,1.061,0,.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={secondaryfill}
        />
        <path
          d="M4.404,4.404c.293-.293,.293-.768,0-1.061-.293-.293-.768-.293-1.061,0-.293,.293-.293,.768,0,1.061,.293,.293,.768,.293,1.061,0Z"
          fill={secondaryfill}
        />
        <path
          d="M11.487,2.995c.383,.159,.821-.023,.98-.406,.159-.383-.023-.821-.406-.98-.383-.158-.821,.023-.98,.406-.159,.383,.023,.821,.406,.98Z"
          fill={secondaryfill}
        />
        <path
          d="M15.985,6.918c.383-.158,.564-.597,.406-.98-.159-.383-.597-.564-.98-.406-.383,.158-.564,.597-.406,.98,.159,.383,.597,.564,.98,.406Z"
          fill={secondaryfill}
        />
        <path
          d="M15.985,11.082c-.383-.158-.821,.023-.98,.406-.159,.383,.023,.822,.406,.98,.383,.159,.821-.023,.98-.406,.159-.383-.023-.822-.406-.98Z"
          fill={secondaryfill}
        />
        <path
          d="M11.487,15.005c-.383,.158-.564,.597-.406,.98s.597,.564,.98,.406c.383-.159,.564-.597,.406-.98-.159-.383-.597-.564-.98-.406Z"
          fill={secondaryfill}
        />
        <path
          d="M6.513,15.005c-.383-.158-.821,.023-.98,.406-.159,.383,.023,.821,.406,.98,.383,.158,.821-.023,.98-.406s-.023-.822-.406-.98Z"
          fill={secondaryfill}
        />
        <path
          d="M2.015,11.082c-.383,.158-.564,.597-.406,.98,.159,.383,.597,.564,.98,.406,.383-.158,.564-.597,.406-.98-.159-.383-.597-.564-.98-.406Z"
          fill={secondaryfill}
        />
        <path
          d="M2.589,5.533c-.383-.159-.821,.023-.98,.406-.159,.383,.023,.822,.406,.98s.821-.023,.98-.406c.159-.383-.023-.821-.406-.98Z"
          fill={secondaryfill}
        />
        <path
          d="M6.513,2.995c.383-.158,.564-.597,.406-.98-.159-.383-.597-.564-.98-.406-.383,.159-.564,.597-.406,.98s.597,.564,.98,.406Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Live;
