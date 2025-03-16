import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { getLeagueById, getTeamsByLeagueId } from '../data';
import { ArrowLeft } from 'lucide-react';

const TeamsPage: React.FC = () => {
  const { leagueId } = useParams<{ leagueId: string }>();