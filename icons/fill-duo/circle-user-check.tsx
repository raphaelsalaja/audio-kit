import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleUserCheck({
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
          d="m15.6328,6.6255c-.3857.4995-.9683.8159-1.5977.8672-.0405.0034-.1421.0073-.1826.0073-.5732,0-1.1191-.2153-1.5366-.6069l-1.6064-1.4976c-.4395-.4092-.6934-.9658-.7144-1.5669s.1934-1.1738.604-1.6138c.337-.3611.7872-.5933,1.27-.6758-.8917-.3433-1.8566-.5391-2.8691-.5391C4.5818,1,1,4.5818,1,9s3.5818,8,8,8,8-3.5818,8-8c0-1.1572-.2508-2.2542-.6929-3.2471l-.6743.8726Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m6.7481,7.75c0-1.2431,1.0074-2.25,2.25-2.25s2.25,1.0069,2.25,2.25-1.0074,2.25-2.25,2.25-2.25-1.0069-2.25-2.25Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m13.7078,15.4688c-1.3209.963-2.948,1.5312-4.7078,1.5312s-3.3869-.5682-4.7079-1.5313l.1082-.4083c.5281-2.0469,2.386-3.5604,4.5996-3.5604s4.0714,1.5134,4.5996,3.5603l.1082.4085Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.8525,6c-.189,0-.3721-.0713-.5112-.2017l-1.6089-1.5c-.3032-.2822-.3198-.7568-.0371-1.0596.2827-.3032.7573-.3193,1.0596-.0371l1.0073.9385,2.3945-3.0986c.2524-.3281.7246-.3892,1.0518-.1348.3276.2529.3882.7241.1348,1.0518l-2.8975,3.75c-.1289.167-.3223.272-.5322.2891-.0205.0015-.041.0024-.061.0024Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleUserCheck;
